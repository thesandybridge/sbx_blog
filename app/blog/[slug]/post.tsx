"use client";
// This is a Client Component, I am adding the copy button dynamically to the API response from the markdown.
import { useEffect, useRef } from "react";

const svgCopy =
  '<svg xmlns="http://www.w3.org/2000/svg" class="button-copy" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>';
const svgCheck =
  '<svg xmlns="http://www.w3.org/2000/svg" class="button-checked" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"><path fill-rule="evenodd" fill="rgb(63, 185, 80)" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>';

function enableCopy(
  selector = "pre",
  childSelector = "code",
  btnText = "Copy Me",
  btnTextSuccess = "Copied",
  activeClass = "--copy"
) {
  document
    .querySelectorAll(`${selector}:not(.${activeClass})`)
    .forEach((node) => {
      // create a "copy" button
      let copyBtn = document.createElement("button");
      copyBtn.innerHTML = svgCopy;
      // activeClass acts as flag so we don't add another copy button by  mistake
      copyBtn.classList.add(activeClass);
      node.appendChild(copyBtn);
      copyBtn.addEventListener("click", async () => {
        // copy to clipboard
        if (navigator.clipboard) {
          let text = node.querySelector(childSelector).innerHTML;
          await navigator.clipboard.writeText(text);
        } // change text of button after copying
        copyBtn.innerHTML = svgCheck; // change text back to normal after ### ms
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.innerHTML = svgCopy;
          copyBtn.classList.remove("copied");
        }, 2000);
      });
    });
}

export default function Post({ content }) {
  const ref = useRef(null);

  useEffect(() => {
    enableCopy();
  }, [ref]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
