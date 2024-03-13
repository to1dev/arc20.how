import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'ARC20 代币',
        Svg: require('@site/static/img/tokens.svg').default,
        description: (
            <>
                由比特币最小单位聪支持的同质化染色币标准；一币一聪，代币最低价值由比特币提供保障。通过工作量证明PoW的形式发行与铸造。
            </>
        ),
    },
    {
        title: 'NFT 容器',
        Svg: require('@site/static/img/container.svg').default,
        description: (
            <>
                容器专为NFT设计，用于表示 NFT 和元数据的集合，可以包含多个NFT和元数据，去中心化铸造在比特币区块链上，并可以密封永久保存。
            </>
        ),
    },
    {
        title: 'Realm 领域',
        Svg: require('@site/static/img/realm.svg').default,
        description: (
            <>
                领域名称系统RNS是传统域名系统DNS通过原子协议在比特币区块链上的全新实现。支持全域范围内地址和用户信息的关联，一次铸造，终身有效。
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
