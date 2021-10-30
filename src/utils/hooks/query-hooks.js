import { useQuery } from "react-query"
import CharacterApis from "../api/characters"

export const useMainCharacters = () => {
    const mainCharacters = useQuery({
        queryKey:'main-characters',
        queryFn: () => CharacterApis.getMainCharacters(),
    })

    return mainCharacters;
}