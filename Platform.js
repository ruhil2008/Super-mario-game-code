class Platform
{
    constructor(posX)
    {
        this.sptx = posX;
        this.spty = 650;
        this.sptw = random(100, 300);
        this.spth = random([100, 150, 200]);
        this.spt = createSprite(this.sptx, this.spty, this.sptw, this.spth);
        this.spt.shapeColor = "green";   
        this.spt.addAnimation("ground", groundAnimation);
    }
}