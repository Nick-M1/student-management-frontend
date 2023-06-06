export default async function getAllCoursesByQuery(
    sortingAcs: boolean,
    sortingOrderby: string,
    sortingTextsearch: string,
    pageNumber: number,
    selectedDeparments: string[]
): Promise<Pageable<Course>> {

    const urlParams = new URLSearchParams({
        searchBy: sortingTextsearch,
        orderBy: sortingOrderby,
        isAsc: sortingAcs ? 'true' : 'false',
        'page': pageNumber.toString()
    });

    selectedDeparments.forEach(i => urlParams.append('departments', i));

    return await fetch(`http://localhost:8080/api/v1/courses?${urlParams}`)
        .then(
            r => r.json(),
            () => []
        )
}