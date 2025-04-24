// components/shared/GoogleTranslateButton.js
"use client";

const GoogleTranslateButton = () => {
  const handleTranslate = (lang) => {
    const selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
      selectField.value = lang;
      selectField.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex  overflow-hidden notranslate" translate="no">
      <button
        className="py-2 px-3 text-blue-500 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white rounded-l "
        onClick={() => handleTranslate("en")}
      >
        EN
      </button>
      <button
        className="py-2 px-3 text-blue-500 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white rounded-r border-l-0"
        onClick={() => handleTranslate("bn")}
      >
        বা
      </button>
    </div>
  );
};

export default GoogleTranslateButton;
