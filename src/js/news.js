// function openModal(id) {
//     const modal = document.getElementById('newsModal');
//     const data = newsData[id];
    
//     document.getElementById('modalTitle').textContent = data.title;
//     document.getElementById('modalDate').textContent = data.date;
//     document.getElementById('modalImage').src = data.image;
//     document.getElementById('modalContent').innerHTML = data.content.split('\n').map(p => `<p class="mb-4">${p.trim()}</p>`).join('');
    
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// function closeModal() {
//     const modal = document.getElementById('newsModal');
//     modal.style.display = 'none';
//     document.body.style.overflow = 'auto';
// }

// window.onclick = function(event) {
//     const modal = document.getElementById('newsModal');
//     if (event.target == modal) {
//         closeModal();
//     }
// }

// 点击框架示意图
function openImageModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modalImage.classList.remove('scale-100'); // 确保初始状态为正常大小
    modalImage.classList.add('scale-100'); // 添加缩放类
    document.getElementById('imageModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    const modalImage = document.getElementById('modalImage');
    modalImage.classList.remove('scale-100'); // 关闭时移除缩放类
}

// 添加点击事件以放大图片
// document.getElementById('modalImage').addEventListener('click', function() {
//     this.classList.toggle('scale-150'); // 点击时切换缩放
// });
// 使用浏览器的 localStorage 来记录访问次数（仅限本地统计）
// const elements = document.querySelectorAll('.text-gray-500.text-sm');
// // 第一个元素是日期
// elements[0].textContent = 'Release Time: 2025-03-19';
// fetch('http://localhost:8080/api/visit')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         elements[1].textContent = `Number of visits: ${data.count}`;
//     })
//     .catch(error => console.error('Error fetching visit count:', error));