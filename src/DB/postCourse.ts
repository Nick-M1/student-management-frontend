export default async function postCourse(code: string, title: string, department: string) {
    const newCourse = {
        code, title, department
    }

    return await fetch(
        'http://localhost:8080/api/v1/courses',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse),
        }
    )
}