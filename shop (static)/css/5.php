<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>





<div class="bx-system-auth-form">

<?
if ($arResult['SHOW_ERRORS'] == 'Y' && $arResult['ERROR'])
	/*ShowMessage($arResult['ERROR_MESSAGE']);*/
	echo "<font style='color: red'>Invalid user name or password</font>";
?>

<?if($arResult["FORM_TYPE"] == "login"):?>

<form name="system_auth_form<span id=" title="Код PHP: &lt;?=$arResult[&quot;RND&quot;]?&gt;" class="bxhtmled-surrogate"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>"&gt;
<?if($arResult["BACKURL"] <> ''):?>
	<input name="backurl" value="<span id=" title="Код PHP: &lt;?=$arResult[&quot;BACKURL&quot;]?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;
<?endif?>
<?foreach ($arResult["POST"] as $key => $value):?>
	<input name="<span id=" title="Код PHP: &lt;?=$key?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" value="<?=$value?>" /&gt;
<?endforeach?>
	<input name="AUTH_FORM" value="Y" type="hidden">
	<input name="TYPE" value="AUTH" type="hidden">
	<?if ($arResult["STORE_PASSWORD"] == "Y"):?><?endif?><?if ($arResult["CAPTCHA_CODE"]):?><?endif?><?if($arResult["NEW_USER_REGISTRATION"] == "Y"):?><?endif?><?if($arResult["AUTH_SERVICES"]):?><?endif?><table width="95%">
	<tbody class="b-login__center">
		<tr>
			<td colspan="2">
				Utente:<br>
				<input name="USER_LOGIN" value="<span id=" title="Код PHP: &lt;?=$arResult[&quot;USER_LOGIN&quot;]?&gt;" class="bxhtmled-surrogate" type="text"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" &gt;
			</td>
		</tr>
		<tr>
			<td colspan="2">
			Password:<br>
			<input name="USER_PASSWORD" autocomplete="off" type="password">
<?if($arResult["SECURE_AUTH"]):?>
				<span class="bx-auth-secure" id="bx_auth_secure<span id=" title="Код PHP: &lt;?=$arResult[&quot;RND&quot;]?&gt;"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span></span>" title="&lt;span id="bxid747426256" title="Код PHP: &lt;?echo GetMessage("AUTH_SECURE_NOTE")?&gt;" class="bxhtmled-surrogate"&gt;<span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" style="display:none"&gt;
					<div class="bx-auth-secure-icon"></div>
				
				
<script type="text/javascript">
document.getElementById('bx_auth_secure<?=$arResult["RND"]?>').style.display = 'inline-block';
</script>
<?endif?>
			</td>
		</tr>

		


		<tr>
			<td colspan="2">
			<?echo GetMessage("AUTH_CAPTCHA_PROMT")?>:<br>
			<input name="captcha_sid" value="<span id=" title="Код PHP: &lt;?echo $arResult[&quot;CAPTCHA_CODE&quot;]?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;
			<img src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult[">" data-bx-app-ex-src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" /&gt;<br><br>
			<input name="captcha_word" maxlength="50" value="" type="text"></td>
		</tr>

		<tr>
			<td colspan="2"><input name="Login" class="b-accedi" value="" type="submit"></td>
		</tr>

		<tr>
			/*<td colspan="2"><noindex><a href="<?=$arResult[">" data-bx-app-ex-href="<?=$arResult["AUTH_REGISTER_URL"]?>" rel="nofollow"&gt;<?=GetMessage("AUTH_REGISTER")?></a></noindex><br></td>*/
		</tr>


		

		<tr>
			<td colspan="2">
				<div class="bx-auth-lbl"><?=GetMessage("socserv_as_user_form")?></div>
<?$APPLICATION->IncludeComponent(
	"bitrix:socserv.auth.form",
	"icons",
	Array(
		"AUTH_SERVICES" => $arResult["AUTH_SERVICES"],
		"SUFFIX" => "form"
	),
$component,
Array(
	'HIDE_ICONS' => 'Y'
)
);?>
			</td>
		</tr>

	</tbody>
	</table>
</form>

<?if($arResult["AUTH_SERVICES"]):?>
<?$APPLICATION->IncludeComponent(
	"bitrix:socserv.auth.form",
	"",
	Array(
		"AUTH_SERVICES" => $arResult["AUTH_SERVICES"],
		"AUTH_URL" => $arResult["AUTH_URL"],
		"POST" => $arResult["POST"],
		"POPUP" => "Y",
		"SUFFIX" => "form"
	),
$component,
Array(
	'HIDE_ICONS' => 'Y'
)
);?>
<?endif?>

<?
elseif($arResult["FORM_TYPE"] == "otp"):
?>

<form name="system_auth_form<span id=" title="Код PHP: &lt;?=$arResult[&quot;RND&quot;]?&gt;" class="bxhtmled-surrogate"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" method="post" target="_top" action="<?=$arResult["AUTH_URL"]?>"&gt;
<?if($arResult["BACKURL"] <> ''):?>
	<input name="backurl" value="<span id=" title="Код PHP: &lt;?=$arResult[&quot;BACKURL&quot;]?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;
<?endif?>
	<input name="AUTH_FORM" value="Y" type="hidden">
	<input name="TYPE" value="OTP" type="hidden">
	<?if ($arResult["CAPTCHA_CODE"]):?><?endif?><?if ($arResult["REMEMBER_OTP"] == "Y"):?><?endif?><table width="95%">
		<tbody><tr>
			<td colspan="2">
			<?echo GetMessage("auth_form_comp_otp")?><br>
			<input name="USER_OTP" maxlength="50" value="" size="17" autocomplete="off" type="text"></td>
		</tr>

		<tr>
			<td colspan="2">
			<?echo GetMessage("AUTH_CAPTCHA_PROMT")?>:<br>
			<input name="captcha_sid" value="<span id=" title="Код PHP: &lt;?echo $arResult[&quot;CAPTCHA_CODE&quot;]?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;
			<img src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult[">" data-bx-app-ex-src="/bitrix/tools/captcha.php?captcha_sid=<?echo $arResult["CAPTCHA_CODE"]?>" width="180" height="40" alt="CAPTCHA" /&gt;<br><br>
			<input name="captcha_word" maxlength="50" value="" type="text"></td>
		</tr>


		<tr>
			<td valign="top"><input id="OTP_REMEMBER_frm" name="OTP_REMEMBER" value="Y" type="checkbox"></td>
			<td width="100%"><label for="OTP_REMEMBER_frm" title="&lt;span id=" class="bxhtmled-surrogate"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>"&gt;<?echo GetMessage("auth_form_comp_otp_remember")?></label></td>
		</tr>

		<tr>
			<td colspan="2"><input name="Login" value="<span id=" title="Код PHP: &lt;?=GetMessage(&quot;AUTH_LOGIN_BUTTON&quot;)?&gt;" class="bxhtmled-surrogate" type="submit"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;</td>
		</tr>
		<tr>
			<td colspan="2"><noindex><a href="<?=$arResult[">" data-bx-app-ex-href="<?=$arResult["AUTH_LOGIN_URL"]?>" rel="nofollow"&gt;<?echo GetMessage("auth_form_comp_auth")?></a></noindex><br></td>
		</tr>
	</tbody></table>
</form>

<?
else:
?>

<form action="<span id=" title="Код PHP: &lt;?=$arResult[&quot;AUTH_URL&quot;]?&gt;" class="bxhtmled-surrogate"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>"&gt;
	<table width="95%">
		<tbody><tr>
			<td align="center">
				<?=$arResult["USER_NAME"]?><br>
				[<?=$arResult["USER_LOGIN"]?>]<br>
				<a href="<?=$arResult[">" data-bx-app-ex-href="<?=$arResult["PROFILE_URL"]?>" title="" data-bx-app-ex-title="<?=GetMessage("AUTH_PROFILE")?>"&gt;<?=GetMessage("AUTH_PROFILE")?></a><br>
			</td>
		</tr>
		<tr>
			<td align="center">
			<?foreach ($arResult["GET"] as $key => $value):?>
				<input name="<span id=" title="Код PHP: &lt;?=$key?&gt;" class="bxhtmled-surrogate" type="hidden"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" value="<?=$value?>" /&gt;
			<?endforeach?>
			<input name="logout" value="yes" type="hidden">
			<input name="logout_butt" value="<span id=" title="Код PHP: &lt;?=GetMessage(&quot;AUTH_LOGOUT_BUTTON&quot;)?&gt;" class="bxhtmled-surrogate" type="submit"><span class="bxhtmled-surrogate-inner"><span class="bxhtmled-right-side-item-icon"></span><span class="bxhtmled-comp-lable" unselectable="on" spellcheck="false">Код PHP</span></span>" /&gt;
			</td>
		</tr>
	</tbody></table>
</form>
<?endif?>
</div><br>