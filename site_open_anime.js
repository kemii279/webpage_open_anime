document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const text = "Hello World"; // アニメーションさせる文字
    const chars = text.split(''); // 文字を配列に分割

    // 文字を一文字ずつspanで囲む
    chars.forEach((char, index) => {
        const span = document.createElement('span');
        // 空白文字の場合は &nbsp; を使う（レイアウト崩れ防止）
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        // 各文字にアニメーションの遅延を設定
        span.style.animationDelay = `${index * 0.1}s`; // 0.1秒ずつ遅らせる
        modalContent.appendChild(span);
    });

    // アニメーション全体の時間（目安）
    // 最後のアニメーション開始時間 + アニメーション自体の時間 + 少し待機
    const totalAnimationTime = (chars.length * 0.1 + 0.8 + 0.5) * 1000; // ミリ秒

    // 文字アニメーションが終わる頃にモーダルをフェードアウトさせる
    setTimeout(() => {
        modalOverlay.classList.add('fade-out');
        document.body.classList.add('modal-hidden'); // bodyのスクロールを許可
    }, totalAnimationTime);

    // フェードアウトアニメーションが終わったらモーダルを完全に非表示にする
    // CSSのtransition時間 (1s) + 少し余裕を持たせる
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
    }, totalAnimationTime + 1000); // 1000ms = 1s

});