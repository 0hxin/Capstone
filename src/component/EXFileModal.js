import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
function EXFileModal({ isOpen, isClose }) {
    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <div class='Modal'></div>
            <div class='BMModalBody'>
                <div>
                    <IoIosCloseCircle class='BMIcon' style={{ marginTop: '-10px' }}
                        size='30px' onClick={isClose} />
                </div>
                <div class='Timelabel'>시간
                </div>
                <div class='EXlabel'>어쩌구저쩌구</div>
            </div>
        </div>
    )
}

export default EXFileModal