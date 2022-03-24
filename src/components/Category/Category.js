import React from 'react';
import '../../App.css';

const Category = (props) => (
  <div className="grid" >
    <div className="col-1-12">&nbsp;</div>
    <div className="col-10-12">

      <div className="docs-content">
        <h1 className="docs-title"></h1>
        <div><p>This guide will help you get Node-RED installed and running in just a few minutes.</p>

          <p>Pick where you want to run Node-RED, whether on your local computer, a device
            such as a Raspberry Pi or in the cloud and follow the guides below.</p>

          <div className="post-preview">
            <a href="local">
              <div className="post-header">
                <img src="/images/platform-local.png" />
                  <h2>Running locally</h2>
              </div>
              <div className="post-content">
                Installing Node-RED on your local computer
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div className="col-1-12">&nbsp;</div>

  </div>
);

Category.propTypes = {};

Category.defaultProps = {};

export default Category;
