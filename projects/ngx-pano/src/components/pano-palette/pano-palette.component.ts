import { AfterViewInit, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pano-palette',
    templateUrl: './pano-palette.component.html',
    styleUrls: ['./pano-palette.component.scss']
})
export class PanoPaletteComponent implements OnInit, AfterViewInit {

    @Input()
    default: string = '';

    _preview: string = '';

    _selected: string = '';

    get defaultStyle(): CSSStyleDeclaration {
        return { backgroundColor: this.default } as CSSStyleDeclaration;
    }

    get previewStyle(): CSSStyleDeclaration {
        return { backgroundColor: this._preview } as CSSStyleDeclaration;
    }

    get tttStyle(): CSSStyleDeclaration {
        return { backgroundColor: '#f00' } as CSSStyleDeclaration;
    }

    @Output()
    onPreview: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    onSelect: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {

    }

    // 主题颜色
    tColor: string[] = ['#000000', '#ffffff', '#eeece1', '#1e497b', '#4e81bb', '#e2534d', '#9aba60', '#8165a0', '#47acc5', '#f9974c'];

    // 颜色面板
    colorConfig: string[][] = [
        ['#7f7f7f', '#f2f2f2'],
        ['#0d0d0d', '#808080'],
        ['#1c1a10', '#ddd8c3'],
        ['#0e243d', '#c6d9f0'],
        ['#233f5e', '#dae5f0'],
        ['#632623', '#f2dbdb'],
        ['#4d602c', '#eaf1de'],
        ['#3f3150', '#e6e0ec'],
        ['#1e5867', '#d9eef3'],
        ['#99490f', '#fee9da']
    ];

    // 标准颜色
    bColor: string[] = ['#c21401', '#ff1e02', '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#00215f', '#72349d'];

    /**
     * 预览
     */
    preview(color: string): void {
        this._preview = color;
    }

    /**
     * 选择
     */
    pick(color: string): void {
        this._selected = color;
    }

    /**
     * 确认
     */
    select(): void {
        this.onSelect.emit(this._selected);
    }

    onMouseOver(color: string): void {
        this._preview = color;
    }

    onMouseOut(): void {
        this._preview = this._selected;
    }

    // 颜色面板
    get colorPanel(): string[] {
        let colorArr: string[] = [];
        for (let color of this.colorConfig) {
            colorArr = colorArr.concat(this.gradient(color[1], color[0], 5))
        }
        return colorArr
    }

    // 格式化 hex 颜色值
    parseColor(hexStr: string): string {
        if (hexStr.length === 4) {
            return '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3]
        } else {
            return hexStr
        }
    }

    // RGB 颜色 转 HEX 颜色
    rgbToHex(r: number, g: number, b: number) {
        let hex = ((r << 16) | (g << 8) | b).toString(16)
        return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
    }

    // HEX 转 RGB 颜色
    hexToRgb(hex: string): number[] {
        hex = this.parseColor(hex)
        let rgb = []
        for (let i = 1; i < 7; i += 2) {
            rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
        }
        return rgb
    }

    // 计算渐变过渡颜色
    gradient(startColor: string, endColor: string, step: number): string[] {
        // 讲 hex 转换为 rgb
        let sColor = this.hexToRgb(startColor)
        let eColor = this.hexToRgb(endColor)

        // 计算R\G\B每一步的差值
        let rStep = (eColor[0] - sColor[0]) / step
        let gStep = (eColor[1] - sColor[1]) / step
        let bStep = (eColor[2] - sColor[2]) / step

        let gradientColorArr = []
        // 计算每一步的hex值
        for (let i = 0; i < step; i++) {
            var xxx = rStep * i + sColor[0];
            var yyy = gStep * i + sColor[1];
            var zzz = bStep * i + sColor[2];
            gradientColorArr.push(this.rgbToHex(xxx, yyy, zzz));
        }
        return gradientColorArr
    }

}
