import { graphqlFetch } from "@/libs/api/client";
import { Setting } from "@/libs/api/types/SettingResponse";

export async function getSetting(): Promise<Setting> {
  const data = await graphqlFetch<any>(`query GetSetting {
  setting {
    companyAddress
    companyAddress2
    companyEmail
    companyOpen
    companyPhone
    companyZalo
    logoUrl
    }}`);

  return data.setting ?? null;
}
