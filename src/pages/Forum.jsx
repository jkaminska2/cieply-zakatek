import { useState, useEffect } from "react";
import "./styles/Forum.css";

export default function Forum() {
  // Przykładowe posty startowe, jeśli localStorage jest pusty
  const defaultPosts = [
    {
      id: 1,
      author: "Janek_Gda",
      category: "Okna",
      content: "Czy ktoś montował nawiewniki ciśnieniowe w oknach plastikowych? Realnie pomagają na wilgoć i zatrzymanie ciepła?",
      date: "19.05.2026, 20:15"
    },
    {
      id: 2,
      author: "EkoKasia",
      category: "Dofinansowania",
      content: "Wniosek o Czyste Powietrze złożony! Jeśli macie pytania o dokumenty do urzędu w Warszawie, chętnie pomogę.",
      date: "19.05.2026, 14:30"
    }
  ];

  // Pobieramy posty z localStorage lub ładujemy domyślne
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("forum_posts");
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });

  // Stany dla formularza nowego postu
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Grzejniki");
  const [content, setContent] = useState("");

  // Za każdym razem, gdy zmienia się stan 'posts', zapisujemy go w przeglądarce
  useEffect(() => {
    localStorage.setItem("forum_posts", JSON.stringify(posts));
  }, [posts]);

  // Obsługa dodawania nowego postu
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      author: author,
      category: category,
      content: content,
      date: new Date().toLocaleString("pl-PL", { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "2-digit", year: "numeric" })
    };

    setPosts([newPost, ...posts]); // Dodajemy nowy post na samą górę listy
    setContent(""); // Czyszczenie pola tekstowego po dodaniu
  };

  return (
    <div className="forum-page">
      <header className="forum-header">
        <h1>Forum Społeczności</h1>
        <div className="header-bar"></div>
        <p>Wymieniaj się doświadczeniami i patentami na ciepły oraz oszczędny dom.</p>
      </header>

      <div className="forum-layout">
        {/* LEWA KOLUMNA: Formularz dodawania nowego wątku */}
        <section className="form-sidebar">
          <div className="forum-card-form">
            <h3>Rozpocznij dyskusję</h3>
            <form onSubmit={handleSubmit} className="forum-form">
              <div className="input-group">
                <label>Twój Nick</label>
                <input 
                  type="text" 
                  placeholder="np. CiepłyAndrzej" 
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Kategoria</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Grzejniki">🔥 Grzejniki i Ogrzewanie</option>
                  <option value="Okna">🪟 Okna i Izolacja</option>
                  <option value="Dofinansowania">💰 Dofinansowania</option>
                  <option value="Inne">💬 Wolne rozmowy</option>
                </select>
              </div>

              <div className="input-group">
                <label>Treść wiadomości</label>
                <textarea 
                  placeholder="Napisz, z czym masz problem lub czym chcesz się podzielić..." 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-forum">Opublikuj post</button>
            </form>
          </div>
        </section>

        {/* PRAWA KOLUMNA: Lista postów */}
        <main className="posts-feed">
          <h2>Najnowsze wątki</h2>
          {posts.length === 0 ? (
            <p className="no-posts">Brak wpisów. Bądź pierwszy i rozpocznij dyskusję!</p>
          ) : (
            <div className="posts-list">
              {posts.map((post) => (
                <article className="post-card" key={post.id}>
                  <div className="post-meta">
                    <span className="post-category-tag">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <div className="post-author">
                    <div className="author-avatar">
                      {post.author.substring(0, 2).toUpperCase()}
                    </div>
                    <span>Dodane przez: <strong>{post.author}</strong></span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}