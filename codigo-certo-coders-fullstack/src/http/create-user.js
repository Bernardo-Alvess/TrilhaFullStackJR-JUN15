export async function createUser({ name, email, password }) {

    const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    })

    const data = await response.json()

    return { userId: data.id }

}