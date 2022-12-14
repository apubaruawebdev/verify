const nodeMailer = require('nodemailer');
const dotenv = require('dotenv').config();

// create a transport
const transport = nodeMailer.createTransport({
    host : process.env.EMAIL_HOST,
    port : process.env.EMAIL_PORT,
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS
    }
})


const verifyAccountMail = async (to, sub, data={ }) => {

    

    await transport.sendMail({
        from : `"Account Verify" <${process.env.EMAIL_HOST}>`,
        to : to,
        subject : sub,
        text : 'Account',
        html : `
        <!DOCTYPE html>

        <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
        
        <head>
            <title></title>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                .desktop_hide,
                .desktop_hide table {
                    mso-hide: all;
                    display: none;
                    max-height: 0px;
                    overflow: hidden;
                }
        
                @media (max-width:660px) {
        
                    .desktop_hide table.icons-inner,
                    .social_block.desktop_hide .social-table {
                        display: inline-block !important;
                    }
        
                    .icons-inner {
                        text-align: center;
                    }
        
                    .icons-inner td {
                        margin: 0 auto;
                    }
        
                    .image_block img.big,
                    .row-content {
                        width: 100% !important;
                    }
        
                    .mobile_hide {
                        display: none;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
        
                    .mobile_hide {
                        min-height: 0;
                        max-height: 0;
                        max-width: 0;
                        overflow: hidden;
                        font-size: 0px;
                    }
        
                    .desktop_hide,
                    .desktop_hide table {
                        display: table !important;
                        max-height: none !important;
                    }
                }
            </style>
        </head>
        
        <body style="background-color: #f8f8f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9;" width="100%">
                <tbody>
                    <tr>
                        <td>
        
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="20" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:12px;padding-top:60px;">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="image_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:40px;padding-right:40px;width:100%;">
                                                                        <div align="center" class="alignment"
                                                                            style="line-height:10px"><img alt="I'm an image"
                                                                                class="big"
                                                                                src="data:image/png;base64,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"
                                                                                style="display: block; height: auto; border: 0; width: 352px; max-width: 100%;"
                                                                                title="I'm an image" width="352" /></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-3" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad" style="padding-top:50px;">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-4" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;">
                                                                                    <span
                                                                                        style="font-size:30px;color:#2b303a;"><strong>Hi! ${data.name} Activate
                                                                                            your account with the activation
                                                                                            code</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-5" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
                                                                                    <span
                                                                                        style="color:#808389;font-size:15px;">Lorem
                                                                                        ipsum dolor sit amet, consectetur
                                                                                        adipisicing elit, sed do eiusmodati mat
                                                                                        tempor incididunt ut labore et dolore
                                                                                        magna aliqua.</span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-6" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad" style="padding-top:50px;">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3fafa; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-left: 30px solid #FFFFFF; border-right: 30px solid #FFFFFF; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-bottom: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 4px solid #1AA19C;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad" style="padding-top:25px;">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-3" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;">
                                                                                    <span
                                                                                        style="color:#2b303a;font-size:18px;"><strong>Use
                                                                                            this Code</strong></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="text_block block-4" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad" style="padding-bottom:32px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div class=""
                                                                                style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p
                                                                                    style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 19.2px;">
                                                                                    <span
                                                                                        style="color:#1aa19c;font-size:38px;"><span
                                                                                            style=""><strong>BEE20</strong></span></span>
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="button_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-left:10px;padding-right:10px;padding-top:40px;text-align:center;">
                                                                        <div align="center" class="alignment">
                                                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:62px;width:177px;v-text-anchor:middle;" arcsize="97%" stroke="false" fillcolor="#1aa19c"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]-->
                                                                            <div
                                                                                style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#1aa19c;border-radius:60px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:15px;padding-bottom:15px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;">
                                                                                <span
                                                                                    style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
                                                                                        style="margin: 0; word-break: break-word; line-height: 32px;"><a
                                                                                            href="http://localhost:5050/student/verify/${ data.token }">Verify
                                                                                            Code</a></span></span>
                                                                            </div>
                                                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                class="divider_block block-2" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad"
                                                                        style="padding-bottom:12px;padding-top:60px;">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                                class="row-content stack" role="presentation"
                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f8f8f9; color: #000000; width: 640px;"
                                                width="640">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                            width="100%">
                                                            <table border="0" cellpadding="20" cellspacing="0"
                                                                class="divider_block block-1" role="presentation"
                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                width="100%">
                                                                <tr>
                                                                    <td class="pad">
                                                                        <div align="center" class="alignment">
                                                                            <table border="0" cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                                                                                width="100%">
                                                                                <tr>
                                                                                    <td class="divider_inner"
                                                                                        style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;">
                                                                                        <span>???</span>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                                role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        
                            </table>
        
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        </body>
        
        </html>
        
        `
    })
}

module.exports = {
    verifyAccountMail
}
