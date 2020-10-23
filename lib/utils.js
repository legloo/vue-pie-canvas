export default class PieChart {
    ctx;
    w;
    h;
    x0;
    y0;
    r;
    outLineWidth;
    rectW;
    rectH;
    space;

    constructor(ctx,r_) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.height;
        this.x0 = r_;
        this.y0 = r_;
        this.r = r_; 
        this.outLineWidth = this.r + 20;
        this.rectW = 30;
        this.rectH = 16;
        this.space = 20;
    }
    init(data) {
        this.drawPie(data);
    }
    drawPie(data) {
        console.log(data)
        let angleList = this.transitionRadian(data);
        console.log(angleList)
        let startRadian = -1.56; 
        let rectY = this.space; 
        for (let i = 0; i < angleList.length; i++) {
            this.ctx.beginPath(); 
            let color = angleList[i].color;
            this.ctx.fillStyle = color; 
            let endRadian = startRadian + angleList[i].angle;
            this.ctx.arc(this.x0, this.y0, this.r, startRadian, endRadian);
            this.ctx.lineTo(this.x0, this.y0);
            this.ctx.fill();
            startRadian = endRadian;
            rectY += (this.rectH + 10);
        }
    }

    transitionRadian(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].num;
        }
        console.log(total)
        for (let i = 0; i < data.length; i++) {
            let angle = 2 * Math.PI * Number(data[i].num) / total;
            data[i].angle = angle;
        }
        return data;
    }




}