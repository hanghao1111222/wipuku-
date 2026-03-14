export interface Product {
  id: string;
  brand: string;
  title: string;
  upc: string;
  model: string;
  amazonUrl: string;
  price: string;
  images: string[];
  features: Feature[];
  specifications: Specification[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Specification {
  label: string;
  value: string;
}

export const products: Product[] = [
  {
    id: "1211-006",
    brand: "Wipuku",
    title: "シェーバー ひげそり 電動シェーバー 【2026新進化・54枚刃】髭剃り 電動 360°回転式 LED画面 IPX7防水 お風呂 乾湿両用 長持ちバッテリー 軽量・低騒音 ロック機能 type-C急速充電 携帯便利 出張/旅行/車内常備/プレゼント 父の日",
    upc: "607602427930",
    model: "1211-006",
    amazonUrl: "https://www.amazon.co.jp/dp/B0G693GQYD",
    price: "¥29,999",
    // 产品图片
    images: [
      "/product-1.jpg",
      "/product-2.jpg",
      "/product-3.jpg",
      "/product-4.jpg",
      "/product-5.jpg",
      "/product-6.jpg",
      "/product-7.jpg",
    ],
    features: [
      {
        title: "【3D密着ヘッド×超高速モーター】",
        description: "本シェーバーは、3D回転式ヘッドと3つの独立浮動刃を搭載しており、顔やあご、首まわりの輪郭にしっかり密着しながら、細かな凹凸にも柔軟に対応します。様々な方向に生えるヒゲを根元から確実に捉え、スムーズに剃り上げます。また、ヒゲの密度を感知するスマート機能により、自動的に出力を最適化し、濃い部分でもワンストロークで深剃りが可能です。12000rpmの高性能モーターを搭載し、力強く効率的なひげそり 電動シェーバーとして快適なシェービング体験をご提供いたします。",
        icon: "🏆",
      },
      {
        title: "【54枚極刃で深剃り×肌に優しい】",
        description: "この電気シェーバーは、精密加工された54枚の高品質ステンレス刃を採用しており、短く硬いヒゲも逃さずしっかりキャッチします。深剃り性能はもちろん、肌へのやさしさも追求されており、敏感肌の方でも安心してお使いいただけます。しっかり剃れてスムーズな肌触りを実現する、ひげそり 電動シェーバーとして毎日の身だしなみをサポートします。耐久性にも優れており、長く鋭い切れ味を保ち続けます。",
        icon: "🏆",
      },
      {
        title: "【LED液晶で残量も一目でスマート】",
        description: "電動シェーバーには、見やすい大型LED液晶ディスプレイを搭載しており、バッテリー残量や使用時間を直感的に確認できます。お手入れタイミングやチャージのタイミングもアイコンで表示され、日々のメンテナンスも簡単です。電動髭剃りとしての機能を最大限に発揮し、常に最適な状態を保てるスマートなデザインです。高機能なシェーバーをお求めの方に最適です。",
        icon: "🏆",
      },
      {
        title: "【IPX7防水で乾湿どちらも快適】",
        description: "IPX7等級の防水仕様を備えたこのシェーバーメンズは、シャワー中でも安心してご使用いただける設計です。乾いた肌はもちろん、シェービングフォームや水と一緒に使いたい方にもぴったり。使い終わった後は丸洗い可能で、いつでも清潔を保てます。メンズシェーバーとして、清潔さと実用性を両立した、毎日のシェービングにぴったりのアイテムです。",
        icon: "🏆",
      },
      {
        title: "【長時間バッテリーで出張も安心】",
        description: "しえーばーには高性能リチウムバッテリーを搭載しており、1回の充電で最大60〜90分の連続使用が可能です。忙しい朝の時間でもサッと使えて、出張や旅行先でも頼れる存在。パワフルな駆動力と携帯性を兼ね備えたこのひげそり 電動シェーバーは、どこでも最高のシェービングを実現します。コンパクトながらも強力なパフォーマンスを求める方におすすめです。",
        icon: "🏆",
      },
    ],
    specifications: [
      { label: "Brand", value: "Wipuku" },
      { label: "Model", value: "1211-006" },
      { label: "UPC", value: "607602427930" },
      { label: "防水等级", value: "IPX7" },
      { label: "刃数", value: "54枚" },
      { label: "モーター回転数", value: "12000rpm" },
      { label: "充電方式", value: "Type-C" },
      { label: "連続使用時間", value: "60〜90分" },
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFirstProduct = (): Product => {
  return products[0];
};
