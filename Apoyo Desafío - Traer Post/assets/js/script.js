// Requerimientos
// 1. Realizar un request (consulta) a la API usando async-await.
// (4 Puntos)
// 2. Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar
// cada uno de los post).
// (3 Puntos)
// 3. Manejar los posibles errores con try-catch.
// (3 Puntos)


async function getPosts() {
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const posts = await response.json();

    const postData = document.getElementById("post-data");

    const ul = document.createElement("ul");

    posts.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      ul.appendChild(li);
    });

    postData.innerHTML = "";
    postData.appendChild(ul);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    alert("Hubo un error al obtener los posts. Por favor, inténtalo de nuevo.");
  }
}
