from flask import Flask, jsonify, render_template

app = Flask(__name__)

RADICALS = [
    {"id":1,"char":"人","name":"Nhân","meaning":"Người","examples":"他, 化, 休","pinyin":"rén"},
    {"id":2,"char":"刀","name":"Đao","meaning":"Con dao, cây đao","examples":"剪, 争, 兔","pinyin":"dāo"},
    {"id":3,"char":"力","name":"Lực","meaning":"Sức mạnh","examples":"边, 办, 务","pinyin":"lì"},
    {"id":4,"char":"口","name":"Khẩu","meaning":"Cái miệng","examples":"吐, 句, 右, 叫","pinyin":"kǒu"},
    {"id":5,"char":"囗","name":"Vi","meaning":"Vây quanh","examples":"团, 困, 四","pinyin":"wéi"},
    {"id":6,"char":"土","name":"Thổ","meaning":"Đất","examples":"坐, 圣, 在","pinyin":"tǔ"},
    {"id":7,"char":"大","name":"Đại","meaning":"To lớn","examples":"太, 夬","pinyin":"dà"},
    {"id":8,"char":"女","name":"Nữ","meaning":"Nữ giới","examples":"妈, 姐姐, 妹妹","pinyin":"nǚ"},
    {"id":9,"char":"宀","name":"Miên","meaning":"Mái che, mái hiên","examples":"家, 按","pinyin":"mián"},
    {"id":10,"char":"山","name":"Sơn","meaning":"Núi non","examples":"山, 官, 家, 寄","pinyin":"shān"},
    {"id":11,"char":"巾","name":"Cân","meaning":"Quảng","examples":"帅, 师, 币","pinyin":"jīn"},
    {"id":12,"char":"广","name":"Nghiễm/Quảng","meaning":"Mái nhà lớn","examples":"库, 庙, 店","pinyin":"yǎn/guǎng"},
    {"id":13,"char":"彳","name":"Xích","meaning":"Bước chân trái","examples":"行","pinyin":"chì"},
    {"id":14,"char":"心","name":"Tâm","meaning":"Tim, tâm trí, tấm lòng","examples":"忘, 愁, 想","pinyin":"xīn"},
    {"id":15,"char":"手","name":"Thủ","meaning":"Tay","examples":"指","pinyin":"shǒu"},
    {"id":16,"char":"攴","name":"Phộc","meaning":"Đánh khẽ","examples":"政, 教, 数","pinyin":"pù"},
    {"id":17,"char":"日","name":"Nhật","meaning":"Ngày, mặt trời","examples":"旧, 早, 明, 是","pinyin":"rì"},
    {"id":18,"char":"木","name":"Mộc","meaning":"Gỗ, cây cối","examples":"本, 树, 机, 杀","pinyin":"mù"},
    {"id":19,"char":"水","name":"Thủy","meaning":"Nước","examples":"冰, 海, 湖","pinyin":"shuǐ"},
    {"id":20,"char":"火","name":"Hỏa","meaning":"Lửa","examples":"炒, 灯, 烫, 灾","pinyin":"huǒ"},
    {"id":21,"char":"牛","name":"Ngưu","meaning":"Trâu","examples":"牧, 牲, 牴","pinyin":"niú"},
    {"id":22,"char":"犬","name":"Khuyển","meaning":"Con chó","examples":"狗, 狐, 哭","pinyin":"quǎn"},
    {"id":23,"char":"玉","name":"Ngọc","meaning":"Đá quý, ngọc","examples":"国, 宝石","pinyin":"yù"},
    {"id":24,"char":"田","name":"Điền","meaning":"Ruộng","examples":"电, 男, 画","pinyin":"tián"},
    {"id":25,"char":"疒","name":"Nạch","meaning":"Bệnh tật","examples":"病, 痰","pinyin":"nǐ"},
    {"id":26,"char":"目","name":"Mục","meaning":"Mắt","examples":"看, 眉, 省","pinyin":"mù"},
    {"id":27,"char":"石","name":"Thạch","meaning":"Đá","examples":"破, 碰, 碗","pinyin":"shí"},
    {"id":28,"char":"禾","name":"Hòa","meaning":"Lúa","examples":"私, 稳, 稿, 种, 稻草","pinyin":"hé"},
    {"id":29,"char":"竹","name":"Trúc","meaning":"Tre, trúc","examples":"笔, 笑, 笨","pinyin":"zhú"},
    {"id":30,"char":"米","name":"Mễ","meaning":"Gạo","examples":"将来, 数","pinyin":"mǐ"},
    {"id":31,"char":"糸","name":"Mịch","meaning":"Sợi tơ nhỏ","examples":"糺, 糿","pinyin":"mì"},
    {"id":32,"char":"肉","name":"Nhục","meaning":"Thịt","examples":"肉慾, 肉刑","pinyin":"ròu"},
    {"id":33,"char":"艸","name":"Thảo","meaning":"Cỏ","examples":"草, 茶, 节, 苦","pinyin":"cǎo"},
    {"id":34,"char":"虫","name":"Trùng","meaning":"Sâu bọ","examples":"虾, 蛇, 蚊","pinyin":"chóng"},
    {"id":35,"char":"衣","name":"Y","meaning":"Y phục, quần áo","examples":"滚, 袋, 装","pinyin":"yī"},
    {"id":36,"char":"言","name":"Ngôn","meaning":"Nói","examples":"诗, 谁, 请, 课","pinyin":"yán"},
    {"id":37,"char":"貝","name":"Bối","meaning":"Vật báu","examples":"货, 贵, 贴, 费","pinyin":"bèi"},
    {"id":38,"char":"足","name":"Túc","meaning":"Chân, đầy đủ","examples":"踢, 跑, 跟, 跪","pinyin":"zú"},
    {"id":39,"char":"車","name":"Xa","meaning":"Chiếc xe","examples":"自行车, 电动车","pinyin":"chē"},
    {"id":40,"char":"辵","name":"Quai Xước","meaning":"Chợt đi chợt dừng","examples":"边, 过, 这, 达","pinyin":"chuò"},
    {"id":41,"char":"邑","name":"Ấp","meaning":"Vùng đất","examples":"扈, 邕","pinyin":"yì"},
    {"id":42,"char":"金","name":"Kim","meaning":"Kim loại, vàng","examples":"铜, 钱, 铅, 锁","pinyin":"jīn"},
    {"id":43,"char":"門","name":"Môn","meaning":"Cửa hai cánh","examples":"问, 闭, 闲","pinyin":"mén"},
    {"id":44,"char":"阝","name":"Phụ","meaning":"Đống đất, gò đất","examples":"陧, 险, 院, 隔","pinyin":"fù"},
    {"id":45,"char":"雨","name":"Vũ","meaning":"Mưa","examples":"雪, 雷, 零, 雾","pinyin":"yǔ"},
    {"id":46,"char":"頁","name":"Hiệt","meaning":"Đầu, trang giấy","examples":"顶, 顺, 顿, 题","pinyin":"yè"},
    {"id":47,"char":"食","name":"Thực","meaning":"Ăn","examples":"饼, 饭, 饿","pinyin":"shí"},
    {"id":48,"char":"馬","name":"Mã","meaning":"Con ngựa","examples":"妈, 骂, 骑","pinyin":"mǎ"},
    {"id":49,"char":"魚","name":"Ngư","meaning":"Con cá","examples":"鲁, 魸","pinyin":"yú"},
    {"id":50,"char":"鳥","name":"Điểu","meaning":"Con chim","examples":"鳦","pinyin":"niǎo"},
]

@app.route("/")
def index():
    return render_template("index.html", radicals=RADICALS)

@app.route("/api/radicals")
def get_radicals():
    return jsonify(RADICALS)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=4000)
