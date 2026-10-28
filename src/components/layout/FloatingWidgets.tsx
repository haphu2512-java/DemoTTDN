"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show/hide for AIO contact bar
    const showAllBtn = document.getElementById("ws247-aio-ct-button-show-all-icon");
    const hideAllBtn = document.getElementById("js-hide-all-icon-e");
    const contactIcons = document.getElementById("ft-contact-icons");

    const handleToggle = (e: MouseEvent) => {
      e.preventDefault();
      if (!contactIcons) return;
      if (contactIcons.classList.contains("active")) {
        contactIcons.classList.remove("active");
        showAllBtn?.classList.remove("hide-me");
      } else {
        contactIcons.classList.add("active");
        showAllBtn?.classList.add("hide-me");
      }
    };

    const handleHide = (e: MouseEvent) => {
      e.preventDefault();
      contactIcons?.classList.remove("active");
      showAllBtn?.classList.remove("hide-me");
    };

    showAllBtn?.addEventListener("click", handleToggle);
    hideAllBtn?.addEventListener("click", handleHide);

    return () => {
      showAllBtn?.removeEventListener("click", handleToggle);
      hideAllBtn?.removeEventListener("click", handleHide);
    };
  }, []);

  return (
    <>
      {/* Search Overlay */}
      <div className="search-overlay">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-close">
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>
            <div className="search-overlay-form">
              <form role="search" method="get" action="/blog">
                <input
                  name="s"
                  type="text"
                  placeholder="Tìm kiếm"
                  className="input-search"
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <div
        className="sidebarModal modal right fade"
        id="sidebarModal"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
            >
              <i className="bx bx-x"></i>
            </button>
            <div className="modal-body">
              <div className="logo">
                <a href="/" className="d-inline-block">
                  <img
                    src="/api/image?path=2021%2F05%2Ftbay-1.png"
                    alt="tbay.vn"
                  />
                </a>
              </div>
              <div className="sidebar-contact-info">
                <h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://zalo.me/0852080383"
                  >
                    Zalo: 0852080383
                  </a>
                  <span>Hoặc</span>
                  <a href="mailto:hotro@tbay.vn">hotro@tbay.vn</a>
                </h2>
              </div>
              <ul className="social-list">
                <li>
                  <span>Mạng Xã Hội:</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/tkwtbayvn"
                    className="d-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCN0FGs-YSeVmO5caYS5B1NA"
                    className="d-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Go Top Button */}
      <div className="go-top">
        <i className="bx bx-up-arrow-alt"></i>
      </div>

      {/* Hotline Call Button (Bottom Left) */}
      <div id="ws247-aio-ct-button-hl" className="hotline">
        <div
          id="phonering-alo-phoneIcon"
          className="phonering-alo-phone phonering-alo-green phonering-alo-show"
        >
          <span className="number">
            <a href="tel:0852080383">
              <i className="fas fa-caret-left"></i>0852080383
            </a>
          </span>
          <div className="phonering-alo-ph-circle"></div>
          <div className="phonering-alo-ph-circle-fill"></div>
          <div className="phonering-alo-ph-img-circle">
            <a className="pps-btn-img" href="tel:0852080383"></a>
          </div>
        </div>
      </div>

      {/* AIO Floating Contact Box (Right side) */}
      <div
        id="ws247-aio-ct-button-show-all-container"
        className="aio-fixed-bt-mb ws247-aio-container-wpshare247"
      >
        <a
          id="ws247-aio-ct-button-show-all-icon"
          href="#"
          className="hide-me js-show-all-icon show-all-icon contact-icons-right show-all-icon0"
        >
          <span>Contact</span>
          <i className="fas fa-long-arrow-alt-up"></i>
        </a>

        <div id="ft-contact-icons" className="active contact-icons-right">
          <div id="ft-contact-icons-out-m" className="ft-pn-sn aio-has-border">
            <div
              id="company_zalo"
              className="ws247-icon-zalo item aio-ct-icon-new"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalo.me/0852080383"
              >
                <span className="icon"></span>
                <span className="ab">
                  <i className="fas fa-caret-left"></i>
                  <label>Zalo: 0852080383</label>
                </span>
              </a>
            </div>

            <div
              id="stt_email"
              className="ws247-icon-envelope item aio-ct-icon-new"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hotro@tbay.vn"
              >
                <span className="icon">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </span>
                <span className="ab">
                  <i className="fas fa-caret-left"></i>
                  <label>Email: hotro@tbay.vn</label>
                </span>
              </a>
            </div>

            <div
              id="stt_hotline"
              className="ws247-icon-phone item aio-ct-icon-new"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:0852080383"
              >
                <span className="icon">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </span>
                <span className="ab">
                  <i className="fas fa-caret-left"></i>
                  <label>Gọi: 0852080383</label>
                </span>
              </a>
            </div>

            <div
              id="icon_google_map"
              className="ws247-icon-map item aio-ct-icon-new"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://maps.google.com/?q=Thiết kế website chuyên nghiệp TBAY.VN"
              >
                <span className="icon">
                  <i className="fas fa-map-marker" aria-hidden="true"></i>
                </span>
                <span className="ab">
                  <i className="fas fa-caret-left"></i>
                  <label>Chỉ đường bản đồ</label>
                </span>
              </a>
            </div>
          </div>

          <div className="item">
            <a href="#" id="js-hide-all-icon-e" className="js-hide-all-icon">
              <span className="icon">
                <i className="fas fa-times"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Zalo Chat Widget */}
      {mounted && (
        <div
          className="zalo-chat-widget"
          data-oaid="2155777403423989486"
          data-welcome-message="Bạn cần tư vấn Thiết Kế Web ngành nào ạ?"
          data-autopopup="0"
          data-width=""
          data-height=""
          suppressHydrationWarning
        />
      )}
      {mounted && (
        <Script src="https://sp.zalo.me/plugins/sdk.js" strategy="lazyOnload" />
      )}
    </>
  );
}
