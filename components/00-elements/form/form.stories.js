import form from "./form.twig";
import "./form.pcss.css";

export default {
  title: "00-elements/form",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A Form.",
      },
      source: {
        code: "drush propel:add form",
      },
    },
  },
  argTypes: {},
  component: form,
};

export const Default = {
  args: {},
  render: (context) => {
    const formElements = `
  <form action="/submit" method="post">
    
    <!-- Text Input -->
    <label for="text">Text Input:</label>
    <input type="text" id="text" name="text" placeholder="Enter text">

    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <!-- URL -->
    <label for="url">URL:</label>
    <input type="url" id="url" name="url">

    <!-- Tel -->
    <label for="tel">Telephone:</label>
    <input type="tel" id="tel" name="tel">

    <!-- Number -->
    <label for="number">Number:</label>
    <input type="number" id="number" name="number" min="0" max="100">

    <!-- Date -->
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">

    <!-- Time -->
    <label for="time">Time:</label>
    <input type="time" id="time" name="time">

    <!-- Color -->
    <label for="color">Color:</label>
    <input type="color" id="color" name="color">

    <!-- Range -->
    <label for="range">Range:</label>
    <input type="range" id="range" name="range" min="1" max="10">

    <!-- Search -->
    <label for="search">Search:</label>
    <input type="search" id="search" name="search">

    <!-- File -->
    <label for="file">File Upload:</label>
    <input type="file" id="file" name="file">

    <!-- Checkbox -->
    <fieldset>
      <legend>Checkboxes:</legend>
      <label><input type="checkbox" name="interest" value="music"> Music</label>
      <label><input type="checkbox" name="interest" value="sports"> Sports</label>
      <label><input type="checkbox" name="interest" value="reading"> Reading</label>
    </fieldset>

    <!-- Radio Buttons -->
    <fieldset>
      <legend>Radio Buttons:</legend>
      <label><input type="radio" name="gender" value="male"> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
      <label><input type="radio" name="gender" value="other"> Other</label>
    </fieldset>

    <!-- Select Dropdown -->
    <label for="select">Select:</label>
    <select id="select" name="select">
      <option value="">--Please choose--</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <!-- Multiple Select -->
    <label for="multi">Multiple Select:</label>
    <select id="multi" name="multi" multiple>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>

    <!-- Textarea -->
    <label for="textarea">Textarea:</label>
    <textarea id="textarea" name="textarea" rows="4" placeholder="Type something..."></textarea>

    <!-- Hidden Input -->
    <input type="hidden" name="hiddenField" value="hiddenValue">

    <!-- Buttons -->
    <label>Buttons:</label>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button" onclick="alert('Button clicked!')">Click Me</button>

    </form>
    `;
    return form({
      ...context,
      form: `${formElements}`,
    });
  },
};
