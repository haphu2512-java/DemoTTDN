<?php 
$taxonomy = 'w366_domain_pricing_tax';
$terms = get_terms( array(
	'taxonomy' => $taxonomy,
	'hide_empty' => false,
	'orderby' => 'date',
	'order' => 'desc'
) );

function get_domain_query( $term_id ){
	$args_query = array(  	
					'post_type' => 'w366_domain_pricing',
					'tax_query' => array(
										array(
											'taxonomy'  => 'w366_domain_pricing_tax',
											'field'     => 'id', 
											'terms'     => $term_id
										)
									),
					'posts_per_page' => -1 ,
					'post_status' => 'publish',
					'orderby' 			=> 'date',
					'order'				=> 'asc'
					);
	
	$query = new WP_Query( $args_query );
	return $query;
}
?>
<article class="domain-block">
    <div class="container">
        <?php 
		if($terms){
			foreach($terms as $term){
				$term_id = $term->term_id;
				?>
                <div class="table-responsive">
                    <table class="table">
                    	<col width="35%"/>
                        <col width="20%"/>
                        <col width="20%"/>
                        <col width="25%"/>
                    	<thead>
                          <tr>
                            <th><?php echo $term->name;?></th>
                            <th>ĐĂNG KÝ NĂM ĐẦU</th>
                            <th>DUY TRÌ / NĂM</th>
                            <th>CHUYỂN VỀ TBAY</th>
                          </tr>
                        </thead>
                        <?php
                        $the_query = get_domain_query( $term_id );
                        if ( $the_query->have_posts() ) {
                            while ( $the_query->have_posts() ) { $the_query->the_post();
                                $price_namdau = get_field('price_1');
                                $price_duytri = get_field('price_2');
                                $price_chuyenve = get_field('price_3');
                                ?>
                                <tr>
                                    <td><?php the_title();?></td>
                                    <td class="center"><?php echo wle_format_money($price_namdau, true);?></td>
                                    <td class="center"><?php echo wle_format_money($price_duytri, true);?></td>
                                    <td class="center"><?php echo wle_format_money($price_chuyenve, true);?></td>
                                  </tr>
                                <?php
                            }
                            wp_reset_postdata();
                        }
                        ?>
                    </table>
                </div>
                <?php
			}
		}
		?>
    </div>
</article>