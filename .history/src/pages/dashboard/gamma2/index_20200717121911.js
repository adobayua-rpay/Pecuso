import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Button } from 'antd'
const { Dragger } = Upload
const { Option } = Select

  const [confirmDirty, setConfirmDirty] = useState(false)

  const handleConfirmBlur = e => {
    const { value } = e.target
    setConfirmDirty(confirmDirty || !!value)
  }

  const opts = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }



const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" />
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <h5 className="mb-3">
              <strong>Portfolio Name</strong>
            </h5>
            <div className="mb-5">
              <Input placeholder="What Would you like to call this portfolio?" />
            </div>
            
            <div className="mb-5" style={{height:'10px',marginLeft:'50%'}}>
              <div className=".col-md-4">
                <Button className="mr-3 mb-3">Begin!</Button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardGamma2
