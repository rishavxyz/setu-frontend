<script>
	import { enhance } from "$app/forms";

</script>

<form method="post" class="container">
  <fieldset>
    <label>
      Your name
      <input
        name="name"
        placeholder="Your full name"
        autocomplete="given-name"
      />
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      />
    </label>
    <label>
      LinkedIn profile link
      <input
        type="url"
        name="linkedinUrl"
        placeholder="Paste your profile URL here"
        autocomplete="off"
      />
    </label>
    <label>
      Short bio
      <textarea
        name="bio"
        placeholder="Briefly describe yourself"
        rows="3"
      />
    </label>
    <!-- <label>
      Profile image
      <input type="file" accept=".jpg, .jpeg, .png, .webp" name="image" />
    </label> -->
  </fieldset>

  <input
    type="submit"
    value="Subscribe"
  />
</form>