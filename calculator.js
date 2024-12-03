// Hàm thực hiện phép toán
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return Không thể chia cho 0;
            }
        default:
            return Toán tử không hợp lệ;
    }
}

// Ví dụ sử dụng
const num1 = 10;
const num2 = 5;

console.log(Cộng:  + calculate(num1, num2, '+')); // 15
console.log(Trừ:  + calculate(num1, num2, '-')); // 5
console.log(Nhân:  + calculate(num1, num2, '*')); // 50
console.log(Chia:  + calculate(num1, num2, '/')); // 2
console.log(Chia cho 0:  + calculate(num1, 0, '/')); // Không thể chia cho 0
console.log(Toán tử không hợp lệ:  + calculate(num1, num2, '^')); // Toán tử không hợp lệ
