module.exports = {
    env: {
        test: {
            presets: [
               
              [
                '@babel/env',
                {
                    modules: 'auto', // 现在不能通过webpack来解析s6 module，需要使用babel来解析，所以要开启
                    targets: {
                    node: 'current' // 指定环境为当前node版本，减少解析不识别语法的范围
                    }
                }
            ],
            '@babel/preset-react'
          ],
            plugins: [
            //     [
            //     '@babel/plugin-transform-runtime', {
            //         corejs: 2,
            //         useESModules: false // 不允许使用es modules，babel需要通过@babel/plugin-transform-modules-commonjs将es module转换为commonjs模块解析
            //     }
            // ],
            ["@babel/plugin-syntax-jsx"]]
        }

    }

}

