import { useQuery } from "react-query"
import CharacterApis from "../api/characters"

export const useMainCharacters = () => {
    const mainCharacters = useQuery({
        queryKey:'main-characters',
        queryFn: () => CharacterApis.getMainCharacters(),
    })
    return mainCharacters;
}

export const useCharacters = ({ page, name, status }) => {
    const characters = useQuery({
        queryKey: ["characters", page, name, status],
        queryFn: () => CharacterApis.getCharacters({ page, name, status }),
        keepPreviousData: true,
    })
    return characters;
}