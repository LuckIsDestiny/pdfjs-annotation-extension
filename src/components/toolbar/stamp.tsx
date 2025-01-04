import './index.scss' // 导入组件的样式
import React from 'react' // 导入 React
import { IAnnotationType } from '../../const/definitions' // 导入自定义注释类型
import { formatFileSize } from '../../utils/utils' // 导入文件大小格式化工具
import { useTranslation } from 'react-i18next'
import { defaultOptions } from '../../const/default_options'

// 定义组件的 props 类型
interface StampToolProps {
    annotation: IAnnotationType // 注释类型
    onAdd: (signatureDataUrl: string) => void // 当签名（印章）被添加时的回调函数
}

const StampTool: React.FC<StampToolProps> = props => {
    const { t } = useTranslation()
    const maxSize: number = defaultOptions.stamp.MAX_SIZE

    // 文件输入变化的事件处理函数
    const onInputFileChange = () => {
        props.onAdd('images/bookmark.png')
    }

    return (
        <div className="StampTool">
            <input type="button" accept=".png,.jpg" onClick={onInputFileChange} />
            <div className="icon">{props.annotation.icon}</div>
            <div className="name">{t(`annotations.${props.annotation.name}`)}</div>
        </div>
    )
}

export { StampTool } // 导出 StampTool 组件
