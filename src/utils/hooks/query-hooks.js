import { useQuery } from "react-query"
import CharacterApis from "../api/characters"
import EpisodeApi from "../api/episodes"
import LocationApi from "../api/location"

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

export const useCharacter = (id) => {
    const character = useQuery({
        queryKey: ["character", id],
        queryFn: () =>  CharacterApis.getCharacter(id),
    })

    return character;
}

export const useEpisode = (url) => {
    const episode = useQuery({
        queryKey: ['episode', url],
        queryFn: () => EpisodeApi.getEpisode(url),
    })

    return episode;
}

export const useCharacterLocation = (url) => {
    const location = useQuery({
        queryKey: ['location', url],
        queryFn: () => LocationApi.getLocation(url),
    })

    return location;
}