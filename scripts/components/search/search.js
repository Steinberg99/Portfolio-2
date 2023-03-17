const search = () => {
  const form = document.createElement("form");
  const label = document.createElement("label");
  label.htmlFor = "search";
  label.textContent = "Username";
  const input = document.createElement("input");
  input.id = "search";
  input.name = "search";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Search";

  form.append(label);
  form.appendChild(input);
  form.appendChild(submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value === "") return;

    window.location.hash = `#user/${input.value}`;
  });

  return form;
};

export { search };
