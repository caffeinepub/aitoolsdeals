import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Tool {
    verified: boolean;
    deal: string;
    name: string;
    tags: Array<string>;
    description: string;
    website: string;
    category: string;
    rating: number;
}
export interface backendInterface {
    addTool(name: string, description: string, category: string, rating: number, verified: boolean, tags: Array<string>, deal: string, website: string): Promise<void>;
    filterByCategory(category: string): Promise<Array<Tool>>;
    getAllTools(): Promise<Array<Tool>>;
    getCategories(): Promise<Array<string>>;
    getToolByName(name: string): Promise<Tool>;
    searchTools(searchTerm: string): Promise<Array<Tool>>;
}
