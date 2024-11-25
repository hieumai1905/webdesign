// coding implementation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Form tìm kiếm
  const keywordInput = document.getElementById("key"); // Trường từ khóa
  const priceFromInput = document.getElementById("from"); // Trường giá từ
  const priceToInput = document.getElementById("to"); // Trường giá đến

  form.addEventListener("submit", function (event) {
    // Ngăn chặn form gửi đi nếu không hợp lệ
    event.preventDefault();

    // Xóa các thông báo lỗi cũ
    clearErrors();

    // Kiểm tra từng trường
    let isValid = true;

    // 1. Validate bỏ trống
    if (!keywordInput.value.trim()) {
      //   showError(keywordInput, "Keyword không được để trống.");
      alert("Keyword không được để trống.");
      isValid = false;
    }

    // 2. Validate giá phải là số
    if (
      (priceFromInput.value && isNaN(priceFromInput.value)) ||
      (priceToInput.value && isNaN(priceToInput.value))
    ) {
      //   showError(priceFromInput, "Giá phải là một số hợp lệ.");
      alert("Giá phải là một số hợp lệ.");
      isValid = false;
    }

    // Nếu form hợp lệ, thực hiện gửi form
    if (isValid) {
      alert("Form hợp lệ! Đang tìm kiếm...");
      form.submit();
    }
  });

  // Hàm hiển thị lỗi dưới input
  function showError(inputElement, message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "12px";
    errorDiv.textContent = message;
    inputElement.parentElement.appendChild(errorDiv);
  }

  // Hàm xóa các lỗi cũ
  function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (error) {
      error.remove();
    });
  }
});
// end coding implementation
