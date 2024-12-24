const commentContainer = document.getElementById("commentContainer");

const createElement = (elementName = "div", attributes = {}, ...children) => {
  // Create Element
  const element = document.createElement(elementName);

  // Add attributes
  for (const key in attributes) {
    element[key] = attributes[key];
  }

  // Append Children
  children.forEach((child) => element.appendChild(child));

  return element;
};

const createComment = (name, text) => {
  const p1 = createElement("p", { innerText: name });
  const p2 = createElement("p", { innerText: text });
  const replyBtn = createElement("button", {
    innerText: "Reply",
    className: "reply",
  });

  const mainComment = createElement(
    "div",
    { className: "main-comment" },
    p1,
    p2,
    replyBtn
  );

  const subCommentContainer = createElement("div", {
    className: "sub-comment-container",
  });

  const comment = createElement(
    "div",
    {
      className: "comment",
    },
    mainComment,
    subCommentContainer
  );

  return comment;
};

const createCommentInput = () => {
  const nameInput = createElement("input", {
    type: "text",
    placeholder: "Name",
    className: "text-name name",
  });

  const commentInput = createElement("textarea", {
    rows: 2,
    cols: 40,
    placeholder: "Comment",
    className: "comment-text",
  });

  const postBtn = createElement("button", {
    innerText: "Post",
    className: "post",
  });

  const cancelBtn = createElement("button", {
    innerText: "Cancel",
    className: "cancel",
  });

  const btnHolder = createElement(
    "div",
    { className: "btn-holder" },
    postBtn,
    cancelBtn
  );

  const commentInputContainer = createElement(
    "div",
    { className: "comment-input-container" },
    nameInput,
    commentInput,
    btnHolder
  );

  return commentInputContainer;
};

const firstComment = createComment("Shashwat", "Let's start!");
commentContainer.append(firstComment);

let isCommentOn = false;
commentContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "BUTTON") {
    if (clickedElement.classList.contains("reply") && !isCommentOn) {
      isCommentOn = true;
      clickedElement
        .closest(".main-comment")
        .nextElementSibling.append(createCommentInput());

      return;
    }

    if (clickedElement.classList.contains("post")) {
      isCommentOn = false;
      const commentInput = clickedElement.closest(".comment-input-container");
      const name = commentInput.children[0].value;
      const text = commentInput.children[1].value;

      if (name && text) {
        clickedElement
          .closest(".sub-comment-container")
          .append(createComment(name, text));
      }

      commentInput.remove();
      return;
    }

    if (clickedElement.classList.contains("cancel")) {
      isCommentOn = false;
      clickedElement.closest(".comment-input-container").remove();

      return;
    }
  }
});
