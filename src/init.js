export const init = {
  selector: "textarea#open-source-plugins",
  plugins:
    "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
  imagetools_cors_hosts: ["picsum.photos"],
  menubar: "file edit view insert format tools table help",
  toolbar:
    "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
  toolbar_sticky: true,
  autosave_ask_before_unload: true,
  autosave_interval: "30s",
  autosave_prefix: "{path}{query}-{id}-",
  autosave_restore_when_empty: false,
  autosave_retention: "2m",
  image_advtab: true,
  link_list: [
    { title: "My page 1", value: "https://www.tiny.cloud" },
    { title: "My page 2", value: "http://www.moxiecode.com" },
  ],
  image_list: [
    { title: "My page 1", value: "https://www.tiny.cloud" },
    { title: "My page 2", value: "http://www.moxiecode.com" },
  ],
  image_class_list: [
    { title: "None", value: "" },
    { title: "Some class", value: "class-name" },
  ],
  importcss_append: true,
  file_picker_callback: function (callback, value, meta) {
    /* Provide file and text for the link dialog */
    if (meta.filetype === "file") {
      callback("https://www.google.com/logos/google.jpg", { text: "My text" });
    }

    /* Provide image and alt text for the image dialog */
    if (meta.filetype === "image") {
      callback("https://www.google.com/logos/google.jpg", {
        alt: "My alt text",
      });
    }

    /* Provide alternative source and posted for the media dialog */
    if (meta.filetype === "media") {
      callback("movie.mp4", {
        source2: "alt.ogg",
        poster: "https://www.google.com/logos/google.jpg",
      });
    }
  },
  templates: [
    {
      title: "New Table",
      description: "creates a new table",
      content:
        '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
    },
    {
      title: "Starting my story",
      description: "A cure for writers block",
      content: "Once upon a time...",
    },
    {
      title: "New list with dates",
      description: "New List with dates",
      content:
        '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
    },
  ],
  template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
  template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar:
    "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
  noneditable_noneditable_class: "mceNonEditable",
  toolbar_mode: "sliding",
  contextmenu: "link image imagetools table",
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
};

export const content = `
<p><strong><span style="font-size: 36pt;">国产工控平台控制器</span></strong></p>
<p>&nbsp;</p>
<p><strong><span style="font-size: 14pt;">当前，工控领域运动控制所使用的控制器以 X86 工控机居多：</span></strong></p>
<table style="border-collapse: collapse; width: 100%; background-color: #f5f5f7;" border="0">
<tbody>
<tr>
<td style="width: 48.7571%;">
<p><strong>产生原因</strong></p>
<p style="line-height: 1;">1、可以便捷地购买到标准品；</p>
<p style="line-height: 1;">2、提供标准的 RT-Linux 操作系统；</p>
<p style="line-height: 1;">3、客户使用可以简单快捷上手。</p>
</td>
<td style="width: 48.7571%;">
<p><strong>突出问题</strong></p>
<p style="line-height: 1;">1、性能过剩，工业领域的算力需求甚至不到芯片的一半；</p>
<p style="line-height: 1;">2、成本高昂，产品的价格也因为平台的选择而增加；</p>
<p style="line-height: 1;">3、芯片无法实现国产化，一旦受到国外制裁基本上就处于瘫痪状态</p>
</td>
</tr>
</tbody>
</table>
<p>基于这样的背景，翼辉推出基于国产 CPU 平台和操作系统搭建的工业控制器方案，既解决核心技术问题，又在实时性、稳定性、性价比等方面占据优势。</p>
<p>现阶段为满足市场和国产化需求，选择全志 T3 处理器实现芯片和操作系统国产化，满足该领域对系统、生态、性能的需求，同时降低了产品的成本，大大增加了市场竞争力。</p>
<p style="line-height: 2;"><strong><span style="font-size: 14pt;">目前该工业控制器产品在工业机器人、机床领域都开始试用，具体产品简介如下：</span></strong></p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www.acoinfo.com/wp-content/uploads/2021/08/1.png" alt="国产工控平台控制器插图"></p>
<table style="border-collapse: collapse; width: 100%; background-color: #f5f5f7;" border="0">
<tbody>
<tr>
<td style="width: 48.7571%;">
<p><strong>功能选择</strong></p>
<p style="line-height: 1;">CPU 频率</p>
<p style="line-height: 1;">RAM</p>
<p style="line-height: 1;">存储内存</p>
<p style="line-height: 1;">RS232</p>
<p style="line-height: 1;">&nbsp;</p>
<p style="line-height: 1;">RS485</p>
<p style="line-height: 1;">Ethernet</p>
<p style="line-height: 1;">CAN 接口</p>
<p style="line-height: 1;">USB</p>
<p style="line-height: 1;">LVDS</p>
</td>
<td style="width: 48.7571%;">
<p><strong>详细说明</strong></p>
<p style="line-height: 1;">四核 1.2GHz ARM Cortex-A7</p>
<p style="line-height: 1;">1GB DDR3</p>
<p style="line-height: 1;">存储内存 8GB EMMC</p>
<p style="line-height: 1;">1x RS232 接线座</p>
<p style="line-height: 1;">1x RS232 标准 DB9 接口</p>
<p style="line-height: 1;">2x RS485 接线座</p>
<p style="line-height: 1;">1x 10/100 Mbps，1x 10/100/1000 Mbsp</p>
<p style="line-height: 1;">2x CAN 2.0B</p>
<p style="line-height: 1;">2x USB 2.0 (HOST)</p>
<p style="line-height: 1;">最大支持1920×1080</p>
</td>
</tr>
</tbody>
</table>
<p><span style="color: #030a12; font-family: verdana, geneva, sans-serif; background-color: #ffffff;">该软硬件一体化的平台解决方案，从硬件平台、操作系统、实时网卡、协议栈、行业算法、集成开发环境等为用户提供一整套实时、稳定、成熟的软硬件一体化平台。</span></p>
<p><span style="font-size: 14pt;"><strong><span style="color: #030a12; font-family: verdana, geneva, sans-serif; background-color: #ffffff;">架构如图：</span></strong></span></p>
<table style="border-collapse: collapse; width: 100%; background-color: #f5f5f7; height: 616.547px;" border="0">
<tbody>
<tr style="height: 616.547px;">
<td style="width: 50%; height: 616.547px; vertical-align: top;">
<ul style="list-style-type: square;">
<li style="line-height: 2;">该国产控制器可以实现 HMI、显控一体解决方案，支持 LVDS 显示接口和丰富的通讯外设，CPU 性能较强。</li>
</ul>
<p style="line-height: 1;">&nbsp;</p>
<ul style="list-style-type: square;">
<li style="line-height: 2;">方案提供将实时控制任务等优先级较高的任务进行亲和设置的功能，以保证控制任务的实时性，图形化任务可利于非控制核的资源，图形任务和实时控制任务通过线程间通讯或进程间通讯机制进行数据交互。</li>
</ul>
<p style="line-height: 1;">&nbsp;</p>
<ul style="list-style-type: square;">
<li style="line-height: 2;">此外，该控制器提供了外部接口可与其他控制板卡通讯单独实现 HMI 功能。</li>
</ul>
</td>
<td style="width: 50%; height: 616.547px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://www.acoinfo.com/wp-content/uploads/2021/08/2.png" alt="国产工控平台控制器插图1" width="532" height="582"></td>
</tr>
</tbody>
</table>
`;
