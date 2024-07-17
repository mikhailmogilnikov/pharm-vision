export type TGeosuggestion = {
  unrestricted_value: string;
  value: string;
  data: Record<string, string>;
};
export type TGeoSuggestionsResponse = { suggestions: TGeosuggestion[] };
export type TGeomark = TGeosuggestion & { id: string };

export type TNavigation = { id: number; name: string; href: string };