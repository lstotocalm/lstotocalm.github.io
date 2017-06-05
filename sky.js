/**
 * Created by LS on 2017/6/3.
 */
function Sky(option) {
    //�ڹ��캯����ȡ ���������ղ��ϣ�
    this.ctx = option.ctx;
    this.image = option.image;
    this.x = option.x;
    this.step = option.step;
}

Sky.prototype = {
    constructor:Sky,
    draw: function () {
        //�������������ʱ������ ����Ĳ��� ʵ�ֹ��ܣ����мӹ���
        this.ctx.drawImage(this.image, this.x, 0);
        if (this.x < -this.image.width) {
            this.x += 2 * this.image.width;
        }
        this.x -= this.step;
    }
};

