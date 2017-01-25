import React, { PropTypes, Component } from 'react';
import JSONEditor from 'components/utils/JSONEditor';
import Theme from 'utils/theme';
import DisplayAreaHOC from 'components/hoc/DisplayAreaHOC';
import '../../../../style/display/display.scss';

export class EditArea extends Component {

    dataFromJSONEditor(editor) {
        try { // throws error if not valid json
            const data = editor.get();
            this.props.valueChange(data);
        } catch (err) {
            this.props.valueChange(err, true);
        }
    }

    render() {
        const { value } = this.props;

        const backgroundStyle = {
            backgroundColor: Theme.palette.primary3Color,
        };

        return (
            <div className={ 'fff-display-area' } style={ backgroundStyle }>
                <JSONEditor value={ value } dataChanged={this.dataFromJSONEditor.bind(this)} />
            </div>
        );
    }
}

EditArea.propTypes = {
    valueChange: PropTypes.func,
};


export default DisplayAreaHOC(EditArea);
