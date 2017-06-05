/**
 * Created by LS on 2017/6/3.
 */
function Pipe(option) {
    this.ctx = option.ctx;
    this.x = option.x;
    this.topImage = option.topImage;
    this.bottomImage = option.bottomImage;

    //���� �Ϲܵ��� y���꣨y��150~300��
    this.y = -(150 + Math.random() * 150);

    //�������¹ܵ�֮��ľ���
    this.ttb = 120;

    //���� �¹ܵ��� y����
    this.bottomY = this.y + this.topImage.height + this.ttb;

    this.step = 2;

}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        //�жϵ�·��
        this.ctx.rect(this.x - 10,this.y + 3,this.topImage.width + 10,this.topImage.height + 10);
        this.ctx.rect(this.x - 10,this.bottomY - 10,this.bottomImage.width+ 10,this.bottomImage.height+ 10);
        //this.ctx.stroke();

        this.ctx.drawImage(this.topImage, this.x, this.y);
        this.ctx.drawImage(this.bottomImage, this.x, this.bottomY);

        this.x -= this.step;
        if(this.x < -this.topImage.width) {
            this.x += 6 * 200;

            this.y = -(150 + Math.random() * 150);
            this.bottomY = this.y + this.topImage.height + this.ttb;
        }

    }
};