import React, { Component } from 'react';
import UpdInp from './UpdInp.js';
import UpdInps from './UpdInps.js';
import UpdTxtArea from './UpdTxtArea.js';
import UpdSel from './UpdSel.js';

import UpdContentEditable from './UpdContentEditable.js';

import UpdImgsBlob from './UpdImgsBlob.js';
import UpdDocsBucket from './UpdDocsBucket.js';
import UpdRefs from './UpdRefs.js';
//import UpdBrds from './UpdBrds.js';

class UpdFld extends Component {

	constructor(props) {
		super(props);
		this.upd_fld = this.upd_fld.bind(this);
		this.upd_fldPsw = this.upd_fldPsw.bind(this);
	}

	upd_fld (val) {
		this.props.upd_doc(this.props.fld, val);
	}

	upd_fldPsw (val) {
		this.props.upd_docPss(this.props.fld, val);
	}

	render () {
		const {coll, _docId, fld, sheetFld, val} = this.props;

		let updComponent = null;
		switch (sheetFld.upd.method) {
			case 'inpTxt': updComponent = <UpdInp type={'text'} val={val} upd_fld={this.upd_fld} />; break;
			case 'inpNum': updComponent = <UpdInp type={'number'} val={val} upd_fld={this.upd_fld} />; break;
			case 'inpPsw': updComponent = <UpdInp type={'text'} val={val} upd_fld={this.upd_fldPsw} />; break;
			case 'inpDate': updComponent = <UpdInp type={'date'} val={val} upd_fld={this.upd_fld} />; break;
			case 'inpTxts': updComponent = <UpdInps type={'text'} vals={val} upd_fld={this.upd_fld} />; break;
			case 'txtArea': updComponent = <UpdTxtArea val={val} upd_fld={this.upd_fld} />; break;
			case 'sel': updComponent = <UpdSel sheetFld={sheetFld} val={val} upd_fld={this.upd_fld} />; break;

			case 'updContentEditable': updComponent = <UpdContentEditable val={val} upd_fld={this.upd_fld} />; break;

			case 'updImgsBlob': updComponent = <UpdImgsBlob coll={coll} _docId={_docId} fld={fld}/* setObj={sheetFld.upd.set} refEmbed={sheetFld.upd.refEmbed} *//>; break;
			case 'updDocsBucket': updComponent = <UpdDocsBucket coll={coll} _docId={_docId} fld={fld} />; break;
			case 'updRefs': updComponent = <UpdRefs coll={coll} _docId={_docId} fld={fld} />; break;
			//case 'updBridges': updComponent = <UpdBridges colls={colls} coll={coll} _docId={_docId} fldKey={fldKey} fld={fld} />; break;
			default: updComponent = <div className="updNull">{val}</div>; break;
		}

		return (
			<div className="UpdFld">
				<div className="updFldLabel">{sheetFld.label.cn} ({fld})</div>
				<div className="updFldVal">
					{updComponent}
				</div>
			</div>
		);
	}
}

export default UpdFld;