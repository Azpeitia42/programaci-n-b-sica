let count = 0;
for (let i = 0; i <= 10; i++) {
    let row = "";
    for (let j = 0; j <= 10; j++) {
        row += count.toString().padStart(3, ' ') + " ";
        count++;
        if (count > 100) break;
    }
    console.log(row);
}
