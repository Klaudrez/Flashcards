// services/deckAdapter.ts
export interface BackendDeck {
    id: number;
    name: string;
    description: string;
    card_count: number;
    native_language: "English" | "Russian" | "Spanish" | "German";
    learning_language: "English" | "Russian" | "Spanish" | "German";
}

interface FrontendDeck {
    deckID: number;
    title: string;
    cardsQuantity: number;
    nativeLanguage: "English" | "Russian" | "Spanish" | "German";
    learningLanguage: "English" | "Russian" | "Spanish" | "German";
}

const adaptBackendToFrontend = (backendDeck: BackendDeck): FrontendDeck => {
    return {
        deckID: backendDeck.id,
        title: backendDeck.name,
        cardsQuantity: backendDeck.card_count,
        nativeLanguage: backendDeck.native_language,
        learningLanguage: backendDeck.learning_language
    };
};

export const adaptBackendDeckArray = (backendDecks: BackendDeck[]): FrontendDeck[] => {
    return backendDecks.map(adaptBackendToFrontend);
};