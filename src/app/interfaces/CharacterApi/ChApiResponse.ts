import { CharacterResponse } from "./CharacterResponse";
import { InfoResult } from "../InfoResult";

export interface ChApiResponse {
    info: InfoResult;
    results: CharacterResponse[];
}