export async function loginUser({ email, password }) {

    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    return { token: data.token }
}