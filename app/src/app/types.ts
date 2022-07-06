export type Predicateobjectmaptype = {
    predicate: string,
    objectType: string,
    object: any,
    objectClass?: string,
    child?: string,
    parent?: string,
    termType: string
}

export type Triplesmaptype = {
    name: string,
    logicalSource: any[],
    subjectMap: any[],
    predicateObjectMap: Predicateobjectmaptype[]
}