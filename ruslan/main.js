$(function(){
    var mouseX = 0, mouseY = 0, limitX = 150-10, limitY = 150-10; 
// ���������� �������, �� ������� ����� ��������� ������
    $(window).mousemove(function(e){
        var offset = $('.move-wrap').offset();
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY);
// ���� ���������� �������
        if (mouseX < 0) mouseX = 0;
// � ������ ������� (���������) �������� �������� �� ��������
        if (mouseY < 0) mouseY = 0;
// ���� ������ ��������� ��� ���-�������� �� ������ ��������, �� ��������� ������ � ����������� x=0, y=0.
     
});
 
    var follower = $("#follower");
    var xp = 0, yp = 0; // ��������� ���������� ������� �� ������ �������� ��������
    var loop = setInterval(function(){
// ����� ������������ ��������, � ������� ����� ��������� ������.
// �������� �������� 20, ��� ��������� ��������. ��� ������ ��� ��������, ��� ��������� �������� ������.
         
            xp += (mouseX - xp) / 20;
        yp += (mouseY - yp) / 20;
        follower.css({left:xp, top:yp});
// ��������� ���������������� ������� � ������� css
         
    }, 10);
//� ������ ������ ��� �������� ����������, ��������� ������ � ������ ����� ����������� ��������
});