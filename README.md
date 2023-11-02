# Critic

- The encapsulation principle is not respected in this code.
  In deleteIem Modal in file src/components/ToDoProject.vue, the Modal was shown using deleteItem(item). In the slot of the modal, we are referencing \_item. It just so happen that \_item and item refers to the same object, but this is prone to bugs and very hard to read.
  For clarity, maybe could set \_item to item inside deleteItem() function

# Learnings

- An interesting pattern used:
  The parent ToDoProject holds the data, it pass this data to components by reference as props. The components pass back the reference to the data when emitting event in order to indicate which item needs to be updated and deleted. The actual edit and delete logic is kept within parent component ToDoProject thanks to the use of modal plugin
- An interesting hacky way to do two-way binding using a prop, in ToDoItemForm
  `      <input type="text" v-model.string="_item.text" @blur="emitUpdate()" />`
  Usually we would pass a reactive variable to v-model
  But here since we want to pass the props into this input form, but the props were not and cannot be created as a reactive variable, we use \_item as a middle man. \_item takes value from the prop, and is updated when props updated. When emitUpdate is called, we emit back the updated \_item.value to the parent

This works but this kind of code is hard to read, and error prone. Is there a more elegant way to bind prop with an input reactive field?

- Include CDN link for font-awesome inside index.html so we don't have to copy paste the css folder

```
<!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
```
