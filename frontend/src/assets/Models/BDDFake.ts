export interface DeckBase{
    deckID: number,
    title: string,
    cardsQuantity: number,
    nativeLanguage: "English" | "Russian" | "Spanish" | "German",
    learningLanguage: "English" | "Russian" | "Spanish" | "German"

}

export const decks:DeckBase[] = [
        { deckID: 1, title: "Basic vocabulary", cardsQuantity: 40, nativeLanguage: "English", learningLanguage:"Russian" },
        { deckID: 2, title: "Game: The Forest", cardsQuantity: 30, nativeLanguage: "English", learningLanguage:"Russian" },
        { deckID: 3, title: "Places", cardsQuantity: 30, nativeLanguage: "English", learningLanguage:"Russian" },
        { deckID: 4, title: "Basic vocabulary", cardsQuantity: 30, nativeLanguage: "English", learningLanguage:"German" },
        { deckID: 5, title: "Verb Tenses", cardsQuantity: 30, nativeLanguage: "English", learningLanguage:"German" },
    ];
