import React from 'react';

import BlockDescriptionLayout from '../components/generic/layouts/BlockDescriptionLayout';
import ContainerLayout from '../components/generic/layouts/ContainerLayout';
import GridLayout from '../components/generic/layouts/GridLayout';
import Skip from '../components/generic/layouts/GridLayout/Skip';
import NestedContainerLayout from '../components/generic/layouts/NestedContainerLayout';
import ScrollLayout from '../components/generic/layouts/ScrollLayout';
import StackLayout from '../components/generic/layouts/StackLayout';
import StretchLastLayout from '../components/generic/layouts/StretchLastLayout';
import StretchLayout from '../components/generic/layouts/StretchLayout';

function B({ i, style, className }) {
  return (
    <div
      style={{
        background: '#5CB85C',
        border: '2px solid #408040',
        minWidth: '100px',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#cee9ce',
        fontSize: '40px',
        ...style,
      }}>
      {i}
    </div>
  );
}

export default function f() {
  return (
    <>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>StackLayout, gap= 10px</b>
        <div style={{ marginTop: '10px' }}>
          <StackLayout gap="10px">
            <B i={1} />
            <B i={2} />
            <B i={3} />
          </StackLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>
          ScrollLayout, orientation= horizontal, scrollOrientation= vertical,
          gap= 10px
        </b>
        <div style={{ width: '550px', marginTop: '10px' }}>
          <ScrollLayout
            style={{ height: '100px' }}
            orientation="horizontal"
            scrollOrientation="vertical"
            gap="10px">
            <B i={1} />
            <B i={2} />
            <B i={3} />
            <B i={4} />
            <B i={5} />
            <B i={6} />
            <B i={7} />
            <B i={8} />
            <B i={9} />
            <B i={10} />
            <B i={11} />
          </ScrollLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>BlockDescriptionLayout, gap= 5px</b>
        <div style={{ marginTop: '10px' }}>
          <BlockDescriptionLayout>
            <BlockDescriptionLayout.Block>
              <B i={1} />
            </BlockDescriptionLayout.Block>
            <BlockDescriptionLayout.Description gap="5px">
              <B i={2} style={{ maxHeight: '47.5px' }} />
              <B i={3} style={{ maxHeight: '47.5px' }} />
            </BlockDescriptionLayout.Description>
          </BlockDescriptionLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>GridLayout, columns= 8, stretchLast (2nd element - Skip)</b>
        <div style={{ marginTop: '10px' }}>
          <GridLayout columns={8} stretchLast>
            <B i="Col 1" column={1} />
            <Skip column={1} />
            <B i="Col 2" column={2} />
            <B i="Stretched" />
          </GridLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical">
        <b style={{ fontSize: '30px' }}>ContainerLayout</b>
        <div
          style={{
            position: 'absolute',
            left: 0,
            marginTop: '50px',
            background: '#c4c4c4',
            width: '100vw',
          }}>
          <ContainerLayout columns={8} stretchLast>
            <B i="On 1700px screen" column={1} />
          </ContainerLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ marginTop: '200px' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            marginTop: '50px',
            background: '#c4c4c4',
            width: '100vw',
          }}>
          <ContainerLayout columns={8} stretchLast>
            <B i="On 1300px screen" column={1} />
          </ContainerLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ marginTop: '200px' }}>
        <B i="Wide screen" column={1} />
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>StretchLastLayout, gap= 10px</b>
        <div style={{ marginTop: '10px' }}>
          <StretchLastLayout gap="10px" style={{ width: '500px' }}>
            <B i={1} />
            <B i={2} />
            <B i={3} />
          </StretchLastLayout>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>StretchLayout</b>
        <div style={{ marginTop: '10px' }}>
          <div style={{ height: '150px', background: '#e4e4e4' }}>
            <b style={{ padding: '10px' }}>Parent container</b>
            <StretchLayout>
              <B i="Stretched to the width of parent" />
            </StretchLayout>
          </div>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ margin: '50px' }}>
        <b>NestedContainerLayout, margin= 30px</b>
        <div style={{ marginTop: '10px' }}>
          <div style={{ height: '150px', background: '#e4e4e4' }}>
            <b style={{ padding: '10px', marginLeft: '20px' }}>
              Parent container
            </b>
            <NestedContainerLayout margin="30px">
              <B i="Nested container" />
            </NestedContainerLayout>
          </div>
        </div>
      </StackLayout>
      <StackLayout orientation="vertical" style={{ marginTop: '200px' }}>
        <B i="Wide screen" column={1} />
      </StackLayout>
    </>
  );
}
