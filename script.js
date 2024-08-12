document.getElementById('shiftForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);  // ここでデータをコンソールに出力してデバッグ
    // 実際のアプリケーションでは、ここでデータをサーバーに送信する処理を追加
});
