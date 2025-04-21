
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