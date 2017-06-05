/**
 * Created by LS on 2017/6/3.
 */

function Bird(option) {
    this.ctx = option.ctx;
    this.image = option.image;
    this.y = option.y;
    this.x = option.x;

    this.picW = this.image.width / 3;
    this.picH = this.image.height;
    this.index = 0;
    this.acc = 0.0002;
    this.v = 0;
    this.maxV = .428;
    this.maxAngle = 60;
    this.lastTime = new Date();
}

Bird.prototype = {
    constructor: Bird,
    draw: function () {
        //todo 1 С��ļ�������
        //��ȡͼƬ���غ�� ʱ��
        var currentTime = new Date();
        //�������ͼƬ�����ʱ��
        var duration = currentTime - this.lastTime;
        //������ǰ��ʱ��
        this.lastTime = currentTime;

        //����С���λ��
        //���㹫ʽ s = v * t + a * t * t / 2;
        var s = this.v * duration + this.acc * duration * duration / 2;
        //�������ٶ�
        this.v = this.v + this.acc * duration;
        this.y += s;

        //todo 2 С������ʱ����ת

        //����ÿ����ת�ĽǶ�
        var angle = this.maxAngle / this.maxV * this.v;

        this.ctx.save();
        //�ƶ�����
        this.ctx.translate(this.x + this.picW / 2, this.y + this.picH / 2);
        //��ת
        this.ctx.rotate(convertAngle(angle));
        //С��
                this.ctx.drawImage(this.image,
            this.picW * this.index, 0, this.picW, this.picH,
            -this.picW / 2, -this.picH / 2, this.picW, this.picH);

        this.ctx.restore();

        this.index++;
        if (this.index >= 3) {
            this.index = 0;
        }
    }
};