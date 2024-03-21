<script>
  export let data;
  const user = data.user;
</script>

<nav class="container">
  <ul>
    <li><strong>SETU</strong></li>
  </ul>
  <ul>
    <li><a href="/upload">Upload data</a></li>
  </ul>
</nav>

<main class="container">
  <section>
    {#if !user}
      <article>
        <header>
          <h3>No user exists</h3>
        </header>
        <a href="/upload" role="button">Upload</a>
      </article>
    {:else}
      <article>
        <hgroup>
          <h3>Hello, {user.name}</h3>
          <p>{user.bio}</p>
        </hgroup>
          <p>
            Email:
            <span>{user.email}</span>
          </p>
          <p>LinkedIn: <a href={user.linkedinUrl}>{user.linkedinUrl}</a></p>
      </article>
    {/if}
  </section>
</main>
